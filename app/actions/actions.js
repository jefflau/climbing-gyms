export const filterCity = (city) => ({
  type: 'FILTER_CITY',
  city
})

export const toggleCitySelect = (city) => ({
  type: 'TOGGLE_CITY_SELECT'
})

export const closeNavPopups = () => ({
  type: 'CLOSE_NAV_POPUPS'
})

export const showBouldering = () => ({
  type: 'SHOW_BOULDERING'
})

export const showRoped = () => ({
  type: 'SHOW_ROPED'
})

export const showAll = () => ({
  type: 'SHOW_ALL'
})
