<template>
    <div role="group" class="input-group-sm">
        <label for="input-live">{{label}}</label>
        <b-form-input
            id="input-live"
            :value="value"
            @input="setValue($event)"
            :state="isValid"
            :placeholder="placeholder"
            :formatter="format"
            aria-describedby="input-live-help input-live-feedback"></b-form-input>

        <b-form-invalid-feedback id="input-live-feedback">
            {{error}}
        </b-form-invalid-feedback>

        <b-form-text id="input-live-help">{{helpText}}.</b-form-text>

    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'
import '~/core/ext/String+Number'

@Component
export default class InputField extends Vue
{
    @Prop( { type: String } )
    readonly label!: string

    @Prop( { type: String, default: '', required: false } )
    readonly placeholder!: string

    @Prop( { type: String, default: '', required: false } )
    readonly error!: string

    @Prop( { type: Function, default: () => null, required: false } )
    readonly validator!: (value: string) => boolean | null

    @Prop( { type: Function, default: (value: string) => value, required: false } )
    readonly format!: (value: string) => string

    @Prop( { type: String, default: '', required: false } )
    readonly helpText!: string

    @Prop( { type: String, default: '', required: false } )
    readonly value!: string

    currentVal = this.value

    get isValid(): boolean | null
    {
        return this.validator(this.currentVal || "")
    }

    setValue(value: string)
    {
        this.currentVal = value
        this.$emit( 'input', value )
    }
}



</script>