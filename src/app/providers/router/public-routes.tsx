import type { RouteObject } from 'react-router-dom'

import { AboutPage } from '@/pages/about'
import { CatalogPage } from '@/pages/catalog'
import { CatalogCategory } from '@/pages/catalog-category'
import { ContactPage } from '@/pages/contacts'
import { DeliveryPage } from '@/pages/delivery'
import { HomePage } from '@/pages/home'
import { OfertaPage } from '@/pages/oferta'
import { PoliticsPage } from '@/pages/politics'
import { SignInPage } from '@/pages/sign-in'
import { SignUpPage } from '@/pages/sign-up'
import { ROUTER_PATHS } from '@/shared/config/routes'

const { ABOUT, CATALOG, CONTACTS, DELIVERY, HOME, OFERTA, POLITICS, SIGN_IN, SIGN_UP } =
  ROUTER_PATHS
const { ACS, MEN, WOMEN } = ROUTER_PATHS

export const publicRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <SignInPage />,
        path: SIGN_IN,
      },
      {
        element: <HomePage />,
        path: HOME,
      },
      {
        element: <CatalogCategory category={'women'} />,
        path: WOMEN,
      },
      {
        element: <CatalogCategory category={'men'} />,
        path: MEN,
      },
      {
        element: <CatalogCategory category={'acs'} />,
        path: ACS,
      },
      {
        element: <SignUpPage />,
        path: SIGN_UP,
      },
      {
        element: <PoliticsPage />,
        path: POLITICS,
      },
      {
        element: <OfertaPage />,
        path: OFERTA,
      },
      {
        element: <CatalogPage />,
        path: CATALOG,
      },
      {
        element: <AboutPage />,
        path: ABOUT,
      },
      {
        element: <ContactPage />,
        path: CONTACTS,
      },
      {
        element: <DeliveryPage />,
        path: DELIVERY,
      },
    ],
  },
]
