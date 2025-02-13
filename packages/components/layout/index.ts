/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

import type {
  LayoutComponent,
  LayoutContentComponent,
  LayoutFooterComponent,
  LayoutHeaderComponent,
  LayoutSiderComponent,
} from './src/types'

import Layout from './src/Layout'
import LayoutContent from './src/LayoutContent'
import LayoutFooter from './src/LayoutFooter'
import LayoutHeader from './src/LayoutHeader'
import LayoutSider from './src/LayoutSider'

const IxLayout = Layout as unknown as LayoutComponent
const IxLayoutContent = LayoutContent as unknown as LayoutContentComponent
const IxLayoutFooter = LayoutFooter as unknown as LayoutFooterComponent
const IxLayoutHeader = LayoutHeader as unknown as LayoutHeaderComponent
const IxLayoutSider = LayoutSider as unknown as LayoutSiderComponent

export { IxLayout, IxLayoutContent, IxLayoutFooter, IxLayoutHeader, IxLayoutSider }

export type {
  LayoutInstance,
  LayoutComponent,
  LayoutPublicProps as LayoutProps,
  LayoutContentInstance,
  LayoutContentComponent,
  LayoutContentPublicProps as LayoutContentProps,
  LayoutFooterInstance,
  LayoutFooterComponent,
  LayoutFooterPublicProps as LayoutFooterProps,
  LayoutHeaderInstance,
  LayoutHeaderComponent,
  LayoutPublicProps as LayoutHeaderProps,
  LayoutSiderInstance,
  LayoutSiderComponent,
  LayoutSiderPublicProps as LayoutSiderProps,
} from './src/types'
