import { tPage } from "../i18n/translator";

export const useMenuArrays = () => {

  const menuItems2XL = [
    {label: tPage("menu.home")},
    {label:  tPage("menu.models")},
    {label:  tPage("menu.children")},
    {label:  tPage("menu.used")},
    {
      label:  tPage("menu.parts"),
      menuItem: [
        {label: "Scotex H10"},
        {label: "Scotex H20"},
        {label: "Scotex Spike"},
        {label: "Scotex Wheely"},
      ]
    },
    {label:  tPage("menu.accessories")},
    {label:  tPage("menu.packing")},
  ]

  const menuItemsXL= [
    {label: tPage("menu.home")},
    {label: tPage("menu.models")},
    {label: tPage("menu.children")},
    {label: tPage("menu.used")},
    {
      label: tPage("menu.parts"),
      menuItem: [
        {label: "Scotex H10"},
        {label: "Scotex H20"},
        {label: "Scotex Spike"},
        {label: "Scotex Wheely"},
      ]
    },
    {label: tPage("menu.accessories")},
    {
      label: tPage("menu.more"),
      menuItem: [
        {label: tPage("menu.packing")},
      ]
    },
  ]

  const menuItemsLG = [
    {label: tPage("menu.home")},
    {label: tPage("menu.models")},
    {label: tPage("menu.children")},
    {label: tPage("menu.used")},
    {
      label: tPage("menu.more"),
      menuItem: [
        {
          label: tPage("menu.parts"),
          menuItem: [
            {label: "Scotex H10"},
            {label: "Scotex H20"},
            {label: "Scotex Spike"},
            {label: "Scotex Wheely"},
          ]
        },
        {label: tPage("menu.accessories")},
        {label: tPage("menu.packing")},
      ]
    },
  ]


  return [menuItems2XL, menuItemsLG, menuItemsXL]
};