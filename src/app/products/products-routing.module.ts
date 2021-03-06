/** Angular Imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Translation Imports */
import { extract } from '../core/i18n/i18n.service';

/** Custom Components */
import { ProductsComponent } from './products.component';
import { ManageTaxConfigurationsComponent } from './manage-tax-configurations/manage-tax-configurations.component';
import { RecurringDepositProductsComponent } from './recurring-deposit-products/recurring-deposit-products.component';
import { ChargesComponent } from './charges/charges.component';
import { FixedDepositProductsComponent } from './fixed-deposit-products/fixed-deposit-products.component';

/** Custom Resolvers */
import { RecurringDepositProductsResolver } from './recurring-deposit-products/recurring-deposit-products.resolver';
import { ChargesResolver } from './charges/charges.resolver';
import { FixedDepositProductsResolver } from './fixed-deposit-products/fixed-deposit-products.resolver';
import { ProductsMixComponent } from './products-mix/products-mix.component';

/** Custom Resolvers */
import { ProductsMixResolver } from './products-mix/products-mix.resolver';

/** Products Routes */
const routes: Routes = [
  Route.withShell([
    {
      path: 'products',
      data: { title: extract('Products'), breadcrumb: 'Products' },
      children: [
        {
          path: '',
          component: ProductsComponent
        },
        {
          path: 'tax-configurations',
          component: ManageTaxConfigurationsComponent,
          data: { title:  extract('Manage Tax Configurations'), breadcrumb: 'Manage Tax Configurations' },
        },
        {
          path: 'recurring-deposit-products',
          component: RecurringDepositProductsComponent,
          resolve: {
                recurringDepositProducts: RecurringDepositProductsResolver
          },
          data: { title:  extract('Recurring Deposit Products'), breadcrumb: 'Recurring Deposit Products' },
        },
        {
          path: 'charges',
          component: ChargesComponent,
          resolve: {
                charges: ChargesResolver
          },
          data: { title:  extract('Charges'), breadcrumb: 'Charges' },
        },
        {
          path: 'fixed-deposit-products',
          component: FixedDepositProductsComponent,
          resolve: {
                fixedDepositProducts: FixedDepositProductsResolver
          },
          data: { title:  extract('Fixed Deposit Products'), breadcrumb: 'Fixed Deposit Products' },
        },
        {
          path: 'products-mix',
          component: ProductsMixComponent,
          resolve: {
                products: ProductsMixResolver
          },
          data: { title:  extract('Products Mix'), breadcrumb: 'Products Mix' },
        },
      ]
    }
  ])
];

/**
 * Products Routing Module
 *
 * Configures the products routes.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    RecurringDepositProductsResolver,
    ChargesResolver,
    FixedDepositProductsResolver,
    ProductsMixResolver,
  ]
})
export class ProductsRoutingModule { }
