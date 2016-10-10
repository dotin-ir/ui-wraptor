import { Component, ReactElement, createElement, ComponentClass, StatelessComponent } from 'react'
import { get } from './ajax'

export function uppercaseFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

interface Element extends EventTarget {
    attachEvent?(event: string, listener: EventListener): boolean;
    detachEvent?(event: string, listener: EventListener): void;
}
function onEvent (element: Element | Element[], event: string | string[], callback: EventListener): () => void {
  if (Array.isArray(element)) {
    return function unbind() {
      const unbinds = element.map((element) => onEvent(element, event, callback));
      unbinds.forEach((unbind) => unbind());
    }
  } else if (Array.isArray(event)) {
    return function unbind() {
      const unbinds = event.map((event) => onEvent(element, event, callback));
      unbinds.forEach((unbind) => unbind());
    }
  } else {
    callback = (function(callback: EventListener): EventListener {
      return (e) => {
        if (!e.target) {
          (<any>e).target = e.srcElement;
        }
        callback(e);
      }
    })(callback);

    if (element.addEventListener) {
      element.addEventListener(event, callback);
    } else if (element.attachEvent) {
      element.attachEvent(`on${uppercaseFirst(event)}`, callback);
    }

    return function unbind() {
      if (element.removeEventListener) {
        element.removeEventListener(event, callback);
      } else if (element.detachEvent) {
        element.detachEvent(`on${uppercaseFirst(event)}`, callback);
      }
    }
  }
}

type ReactComponent1<T> = ComponentClass<T> | StatelessComponent<T>
type ReactComponent2<T> = ReactComponent1<T> | string

export function responsive1<T>(component: ReactComponent1<T & {windowWidth: number}>): ComponentClass<T> {

  return class extends Component<T, {width: number}> {

    constructor() {
      super();
      this.state = { width: window.innerWidth };
    }

    unbindResizeHandler: () => void

    componentWillMount() {
      this.unbindResizeHandler = onEvent(window, 'resize', () => {
        this.setState({ width: window.innerWidth });
      });
    }

    componentWillUnmount() {
      this.unbindResizeHandler();
    }

    render() {
      const props = Object.assign({}, this.props, {windowWidth: this.state.width});
      return createElement(component, props);
    }

  }
}

interface SizeClass {
  minWidth?: number
  maxWidth?: number
  props?: {}
  style?: {}
}
export function responsive2<T>(component: ReactComponent2<T>, ...sizeClasses: SizeClass[]): ComponentClass<T> {

  return responsive1((props: T & {windowWidth: number}) => {

    const additionalProps = sizeClasses.reduce((additionalProps: {style: {}}, sizeClass: SizeClass) => {
      if ((!sizeClass.minWidth || sizeClass.minWidth <= props.windowWidth) && (!sizeClass.maxWidth || sizeClass.maxWidth >= props.windowWidth)) {
        if (sizeClass.style) {
          if (!additionalProps.style) {
            additionalProps.style = {};
          }
          Object.assign(additionalProps.style, sizeClass.style);
        }
        return Object.assign(additionalProps, sizeClass.props);
      }
      return additionalProps;
    }, {});

    props = Object.assign({}, props, additionalProps);
    delete props.windowWidth;
  
    return createElement(<any>component, props); // FIXME: why <any>?
    
  })
}

export function ajaxComponent<T>(component: ReactComponent2<T>, url: string, mapResultToProps = (x: any) => x): ComponentClass<T> {

  return class extends Component<T, {data: {} | undefined}> {

    constructor() {
      super();
      this.state = { data: undefined };
    }

    async componentWillMount() {
      this.setState({ data: await get(url) });
    }

    render(): ReactElement<any> {
      const data = this.state.data;
      if (data) {
        const props = Object.assign({}, this.props, mapResultToProps(this.state.data));
        if (typeof component === 'string') {
          return createElement(component, props);
        }
        return createElement(component, props);        
      }
      return createElement('div', undefined, 'Loading...');
    }

  }
}