/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

import type { CheckboxGroupProps } from './types'
import type { ValueAccessor } from '@idux/cdk/forms'
import type { InjectionKey } from 'vue'

export interface CheckboxGroupContext {
  props: CheckboxGroupProps
  accessor: ValueAccessor<unknown[] | undefined>
}

export const checkboxGroupToken: InjectionKey<CheckboxGroupContext> = Symbol('checkboxGroupToken')
