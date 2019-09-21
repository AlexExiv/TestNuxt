<template>
    <input-float 
        :value="getValue"
        @input="setValue($event)"
        :label="label"
        :help-text="helpText"
        :placeholder="placeholder"
        :digits="getDigits"/>
</template>

<script lang="ts">

import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'

import InputFloat from './InputFloat.vue'
import { MeasureSystem, MeasureValue } from '~/core/Measure'
import '~/core/ext/Number+Measure'

@Component( { components: {
    InputFloat
} } )
export default class InputMeasure extends Vue
{
    @Prop( { type: Boolean, default: true, required: false } )
    readonly emptyIfZero!: boolean

    @Prop( { type: String } )
    readonly label!: string

    @Prop( { type: String, default: '', required: false } )
    readonly placeholder!: string

    @Prop( { type: String, default: '', required: false } )
    readonly helpText!: string

    @Prop( { type: Number, default: 0, required: false } )
    readonly value!: number

    @Prop( { type: Number, required: true, validator: v => [MeasureSystem.metric, MeasureSystem.imperial].indexOf( v ) !== -1 } )
    readonly system!: number

    @Prop( { type: Number, required: true, validator: v => [MeasureValue.volume, MeasureValue.length, MeasureValue.mass, MeasureValue.square].indexOf( v ) !== -1 } )
    readonly measure!: number

    @Prop( { type: Boolean, default: false, required: false } )
    readonly small!: boolean

    get getValue(): number
    {
        switch( this.measure )
        {
            case MeasureValue.volume:
                return this.value.toVol( this.system )

            case MeasureValue.length:
                return this.value.toLen( this.system )
                    
            case MeasureValue.square:
                return this.value.toSq( this.system )
                    
            case MeasureValue.mass:
                return this.value.toMass( this.system )
        }

        return this.value
    }

    setValue(value: number)
    {
        let _value = value
        switch( this.measure )
        {
            case MeasureValue.volume:
                _value = value.fromVol( this.system )
                break

            case MeasureValue.length:
                _value = value.fromLen( this.system )
                break
                    
            case MeasureValue.square:
                _value = value.fromSq( this.system )
                break
                    
            case MeasureValue.mass:
                _value = value.fromMass( this.system )
                break
        }

        this.$emit( 'input', _value )
    }

    get getDigits(): number
    {
        switch( this.system )
        {
            case MeasureSystem.metric:
                switch( this.measure )
                {
                    case MeasureValue.volume:
                        return this.small ? 3 : 1
                    case MeasureValue.length:
                        return this.small ? 2 : 0  
                    case MeasureValue.square:
                        return this.small ? 2 : 0 
                    case MeasureValue.mass:
                        return this.small ? 2 : 0   
                }
                break

            case MeasureSystem.imperial:
                switch( this.measure )
                {
                    case MeasureValue.volume:
                        return this.small ? 5 : 3
                    case MeasureValue.length:
                        return this.small ? 4 : 2  
                    case MeasureValue.square:
                        return this.small ? 4 : 2 
                    case MeasureValue.mass:
                        return this.small ? 4 : 2   
                }
                break
        }

        return -1
    }
}

</script>