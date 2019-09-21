export {};

declare global
{
    interface Number
    {
        toRounded(digits: number): string
    }
}

Number.prototype.toRounded = function(digits: number)
{
    return digits == -1 ? this.toString() : Number(this.toFixed(digits)).toString()
}