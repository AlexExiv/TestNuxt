<template>
    <input-field 
        :value="getValue"
        @input="setValue($event)"
        :label="label"
        :validator="checkValid"
        :help-text="helpText"
        :error="error"
        :placeholder="placeholder"/>
</template>

<script lang="ts">

import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'

import InputField from './InputField.vue'
import '~/core/ext/String+Number'
import '~/core/ext/Number+Round'

@Component( { components: {
    InputField
} } )
export default class InputFloat extends Vue
{
    @Prop( { type: Boolean, default: true, required: false } )
    readonly emptyIfZero!: boolean

    @Prop( { type: String } )
    readonly label!: string

    @Prop( { type: String, default: '', required: false } )
    readonly placeholder!: string

    @Prop( { type: String, default: 'Wrong number format(must be number like 35; 35.0; 35.2; 35,0; 35,2)', required: false } )
    readonly error!: string

    @Prop( { type: String, default: '', required: false } )
    readonly helpText!: string

    @Prop( { type: Number, default: 0, required: false } )
    readonly value!: number

    @Prop( { type: Number, default: -1, required: false } )
    readonly digits!: number

    get getValue(): string
    {
        return (this.value == 0 && this.emptyIfZero) ? "" : this.value.toRounded( this.digits )
    }

    setValue(value: string)
    {
        if( value.isUFloat() )
        {
            const _value = value.toNum()
            this.$emit( 'input', _value )
        }
    }

    checkValid(value: string): boolean | null
    {
        return value.isUFloat() ? null : false
    }
}

</script>