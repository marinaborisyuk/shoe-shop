export const gtmVirtualPageView = (rest: any) => {
  window.dataLayer?.push({
    event: 'VirtualPageView',
    ...rest
  });
}

export const gtmButtonClick = (rest: any) => {
  window.dataLayer?.push({
    event: 'ButtonClick',
    ...rest
  });
}

export cosnt gtmAddToCart = (rest: AddToCartEventData) => {

}