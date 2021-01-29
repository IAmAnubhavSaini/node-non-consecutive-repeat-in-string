function nonConsecutiveRepeat(input: string) {
    return Array.prototype.filter.call(input, (c, i, a) => a[i + 1] !== c).join('');
}

export = {nonConsecutiveRepeat}
