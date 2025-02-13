/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

import type { ProLayoutComponent, ProLayoutSiderTriggerComponent } from '@idux/pro/layout'
import type { ProTransferComponent } from '@idux/pro/transfer'
import type { ProTreeComponent } from '@idux/pro/tree'

declare module 'vue' {
  export interface GlobalComponents {
    IxProLayout: ProLayoutComponent
    IxProLayoutSiderTrigger: ProLayoutSiderTriggerComponent
    IxProTransfer: ProTransferComponent
    IxProTree: ProTreeComponent
  }
}

export {}
