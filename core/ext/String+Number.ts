export {};

declare global
{
    interface String
    {
        toNum(): number;
        ReplaceComma(): string;

        isUFloat(): boolean;
        isUInt(): boolean;
    }
}


String.prototype.toNum = function()
{
    if( this.length == 0 )
        return 0;

    const num = parseFloat( this.ReplaceComma() );
    return isNaN( num ) ? 0 : num;
};

String.prototype.ReplaceComma = function()
{
    return this.replace( ',', '.' )
};

String.prototype.isUFloat = function()
{
    const str = this.ReplaceComma();
    if( str.length === 0 )
        return true;

    const RE = /^\d*\.{0,1}\d+$/;
    return RE.test( str );
};

String.prototype.isUInt = function()
{
    if( this.length === 0 )
        return true;

    const RE = /^\d*$/;
    return RE.test( this.toString() );
};