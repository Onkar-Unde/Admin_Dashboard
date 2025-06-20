import React from 'react'

const Dashboard = React.lazy(() =>
    import ('./views/dashboard/Dashboard'))
const Colors = React.lazy(() =>
    import ('./views/theme/colors/Colors'))
const Typography = React.lazy(() =>
    import ('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() =>
    import ('./views/base/accordion/Accordion'))
const Cards = React.lazy(() =>
    import ('./views/base/cards/Cards'))
const ListGroups = React.lazy(() =>
    import ('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() =>
    import ('./views/base/navs/Navs'))
const Tables = React.lazy(() =>
    import ('./views/base/tables/Tables'))

// Buttons
const Buttons = React.lazy(() =>
    import ('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() =>
    import ('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() =>
    import ('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() =>
    import ('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() =>
    import ('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() =>
    import ('./views/forms/form-control/FormControl'))
const Range = React.lazy(() =>
    import ('./views/forms/range/Range'))
const Charts = React.lazy(() =>
    import ('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() =>
    import ('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() =>
    import ('./views/icons/flags/Flags'))
const Brands = React.lazy(() =>
    import ('./views/icons/brands/Brands'))

const Widgets = React.lazy(() =>
    import ('./views/widgets/Widgets'))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },
    { path: '/theme', name: 'Theme', element: Colors, exact: true },
    { path: '/theme/colors', name: 'Colors', element: Colors },
    { path: '/theme/typography', name: 'Typography', element: Typography },
    { path: '/base', name: 'Base', element: Cards, exact: true },
    { path: '/base/accordion', name: 'Accordion', element: Accordion },
    { path: '/base/cards', name: 'Cards', element: Cards },
    { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
    { path: '/base/navs', name: 'Navs', element: Navs },
    { path: '/base/tables', name: 'Tables', element: Tables },
    { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
    { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
    { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
    { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
    { path: '/charts', name: 'Charts', element: Charts },
    { path: '/forms', name: 'Forms', element: FormControl, exact: true },
    { path: '/forms/form-control', name: 'Form Control', element: FormControl },
    { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
    { path: '/forms/range', name: 'Range', element: Range },
    { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
    { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
    { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
    { path: '/icons/flags', name: 'Flags', element: Flags },
    { path: '/icons/brands', name: 'Brands', element: Brands },
    { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes