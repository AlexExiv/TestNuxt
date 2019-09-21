import './Number+Round'
import { MeasureSystem } from '../Measure';

export {};

declare global
{
    interface Number
    {
        toMeasure(system: MeasureSystem, k: number): number
        fromMeasure(system: MeasureSystem, k: number): number

        toVol(system: MeasureSystem): number
        fromVol(system: MeasureSystem): number

        toLen(system: MeasureSystem): number
        fromLen(system: MeasureSystem): number

        toSq(system: MeasureSystem): number
        fromSq(system: MeasureSystem): number

        toMass(system: MeasureSystem): number
        fromMass(system: MeasureSystem): number
    }
}


Number.prototype.toMeasure = function(system: MeasureSystem, k: number): number
{
    switch( system )
    {
        case MeasureSystem.metric:
            return this.valueOf()

        case MeasureSystem.imperial:
            return this.valueOf()*k
    }
}

Number.prototype.fromMeasure = function(system: MeasureSystem, k: number): number
{
    switch( system )
    {
        case MeasureSystem.metric:
            return this.valueOf()

        case MeasureSystem.imperial:
            return this.valueOf()/k
    }
}


Number.prototype.toVol = function(system: MeasureSystem)
{
    return this.toMeasure(system, 0.035315)
}

Number.prototype.fromVol = function(system: MeasureSystem)
{
    return this.fromMeasure(system, 0.035315)
}


Number.prototype.toLen = function(system: MeasureSystem)
{
    return this.toMeasure(system, 0.03937008)
}

Number.prototype.fromLen = function(system: MeasureSystem)
{
    return this.fromMeasure(system, 0.03937008)
}


Number.prototype.toSq = function(system: MeasureSystem)
{
    return this.toMeasure(system, 1.0/645.16)
}

Number.prototype.fromSq = function(system: MeasureSystem)
{
    return this.fromMeasure(system, 1.0/645.16)
}


Number.prototype.toMass = function(system: MeasureSystem)
{
    return this.toMeasure(system, 0.0022)
}

Number.prototype.fromMass = function(system: MeasureSystem)
{
    return this.fromMeasure(system, 0.0022)
}