<template>
    <input-field 
        :value="getValue"
        @input="setValue($event)"
        :label="label"
        :validator="checkValid"
        :help-text="helpText"
        :error="error"
        :placeholder="placeholder">
    </input-field>
</template>

<script lang="ts">

import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'

import InputField from './InputField.vue'
import '~/core/ext/String+Number'

@Component( { components: {
    InputField
} } )
export default class InputInt extends Vue
{   
    @Prop( { type: Boolean, default: true, required: false } )
    readonly emptyIfZero!: boolean

    @Prop( { type: String } )
    readonly label!: string

    @Prop( { type: String, default: '', required: false } )
    readonly placeholder!: string

    @Prop( { type: String, default: 'Wrong number format(must be number like 35)', required: false } )
    readonly error!: string

    @Prop( { type: String, default: '', required: false } )
    readonly helpText!: string

    @Prop( { type: Number, default: 0, required: false } )
    readonly value!: number

    get getValue(): string
    {
        return (this.value == 0 && this.emptyIfZero) ? "" : this.value.toString()
    }

    setValue(value: string)
    {
        if( value.isUInt() )
        {
            const _value = value.toNum()
            this.$emit( 'input', _value )
        }
    }

    checkValid(value: string): boolean | null
    {
        return value.isUInt() ? null : false
    }
}

</script>