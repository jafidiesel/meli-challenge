const formatPrice = (price: string) => {
    const trimmedPrice = price
        .split('.');
    const decimalPrice = trimmedPrice[1] ? trimmedPrice[1] : '00';
    if(trimmedPrice[0].length <= 3) return price;
    const intPrice =trimmedPrice[0]
        .split('')
        .reverse()
        .join('')
        .match(/.{1,3}/g)!
        .join('.')
        .split('')
        .reverse()
        .join('');
    
    return intPrice.concat(`.${decimalPrice}`);
};

const translateCondition = (condition: string) => {
    if(condition === 'new') return 'Nuevo';
    return 'Usado';
}

export {
    formatPrice,
    translateCondition
};