import { createElement, ComponentClass, ReactElement } from 'react'
import { baseUrl } from '../../config'
import mock from './mock'

/// <reference path='webpack-env.d.ts' />

declare const __isDev__: boolean;

function deserialize(response: any): void {

    function traverseObject(object: any) {
        Object.keys(object).forEach((key) => {
            var value = object[key];
            if (Array.isArray(value)) {
                traverseArray(value);
            } else if (typeof value === 'object' && value !== null) {
                traverseObject(value);
            } else if (typeof value === 'string' && value.substr(0, '__OBJECT__'.length) === '__OBJECT__') {
                object[key] = changeValue(value);
            }
        });
    }

    function traverseArray(array: any[]) {
        array.forEach((value, i) => {
            if (Array.isArray(value)) {
                traverseArray(value);
            } else if (typeof value === 'object' && value !== null) {
                traverseObject(value);
            } else if (typeof value === 'string' && value.substr(0, '__OBJECT__'.length) === '__OBJECT__') {
                array[i] = changeValue(value);
            }
        });
    }

    function changeValue(value: string) {
        return value.substr('__OBJECT__'.length).split('.').reduce((acc, word) => {
            var segments = word.split('[');
            return segments.slice(1, segments.length).map((index) => {
                return +index.substr(0, index.length - 1);
            }).reduce((acc, index) => {
                return acc[index];
            }, acc[segments[0]]);
        }, response);
    }

    if (Array.isArray(response)) {
        traverseArray(response);
    } else if (typeof response === 'object' && response !== null) {
        traverseObject(response);
    }
}

function sendRequest(isGet: boolean) {
    return function (url: string, params: any = {}): Promise<any> {

        if (url.charAt(0) !== '/') {
            url = '/' + url;
        }

        if (__isDev__) {
            let returnValue: any;
            const mockFound = mock.some(function (mock: any) {
                if (mock.url === url) {
                    returnValue = mock.value;
                    return true;
                }
                return false;
            });
            if (mockFound) {
                return returnValue;
            }
        }

        url = `/${baseUrl}/${url}`;
        if (__isDev__) {
            url = `/api/${url}`;
        }
        url = url.replace('//', '/');

        if (isGet) {
            url += '?' + Object.keys(params).map(function (key) { return `${key}=${params[key]}` }).join('&');
        }
        
        return new Promise<any>(function (resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    const response = JSON.parse(xhr.responseText);
                    deserialize(response);
                    if (xhr.status === 200) {
                        resolve(response);
                    } else {
                        reject(response);
                    }
                }
            };
            const methodType = isGet ? 'GET' : 'POST';
            xhr.open(methodType, url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            if (isGet) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(params));
            }
        });
    };
}
export const get = sendRequest(true);
export const post = sendRequest(false);

interface ISequenceResult {
    component: string
    data: any
}

function sendSequenceRequest(fn: (url: string, params?: any) => Promise<ISequenceResult>) {
    return async function (url: string, params: any = {}): Promise<ReactElement<any>> {
        const result: ISequenceResult = await fn(url, params);
        const component = require<{ default: ComponentClass<any> }>('../components/' + result.component.replace('.', '/')).default;
        if (!component) {
            return createElement('div', undefined, 'Error: Component Not Found'); // FIXME
        }
        return createElement(component, result.data);
    }
}
export const getSequence = sendSequenceRequest(get);
export const postSequence = sendSequenceRequest(post);