/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

import { computed, defineComponent, normalizeClass, onMounted } from 'vue'

import { callEmit } from '@idux/cdk/utils'
import { useGlobalConfig } from '@idux/components/config'
import { useFormAccessor, useFormElement, useFormSize } from '@idux/components/form'
import { IxIcon } from '@idux/components/icon'

import { switchProps } from './types'

export default defineComponent({
  name: 'IxSwitch',
  props: switchProps,
  setup(props, { expose, slots }) {
    const common = useGlobalConfig('common')
    const config = useGlobalConfig('switch')
    const mergedPrefixCls = computed(() => `${common.prefixCls}-switch`)
    const mergedSize = useFormSize(props, config)
    const { elementRef, focus, blur } = useFormElement()

    expose({ focus, blur })

    const accessor = useFormAccessor<boolean>('checked')

    const isChecked = computed(() => accessor.valueRef.value)
    const isDisabled = computed(() => props.disabled ?? accessor.disabled.value)

    const handleClick = () => {
      if (isDisabled.value || props.loading) {
        return
      }
      callEmit(props.onChange, !isChecked.value)
      accessor.setValue(!isChecked.value)
    }

    const handleFocus = (evt: FocusEvent) => {
      callEmit(props.onFocus, evt)
    }

    const handleBlur = (evt: FocusEvent) => {
      callEmit(props.onBlur, evt)
      accessor.markAsBlurred()
    }

    const classes = computed(() => {
      const { loading } = props
      const prefixCls = mergedPrefixCls.value
      return normalizeClass({
        [prefixCls]: true,
        [`${prefixCls}-checked`]: isChecked.value,
        [`${prefixCls}-disabled`]: isDisabled.value,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-${mergedSize.value}`]: true,
      })
    })

    onMounted(() => props.autofocus && focus())

    return () => {
      const checked = isChecked.value
      const label = slots.label?.({ checked }) ?? props.labels[checked ? 0 : 1]
      const prefixCls = mergedPrefixCls.value
      return (
        <button
          ref={elementRef}
          type="button"
          class={classes.value}
          onClick={handleClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {props.loading && (
            <span class={`${prefixCls}-loading-icon`}>
              <IxIcon name="loading" />
            </span>
          )}
          <span class={`${prefixCls}-label`}>{label}</span>
        </button>
      )
    }
  },
})
