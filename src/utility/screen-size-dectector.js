/**
 * @returns {string} Enum "xs|sm|md|lg|xl|xxl"
 * @param {number} screenWidth width size to check inside the breakpoints
 */

export const sizeBreakPoint = screenWidth => {
  if (screenWidth < 576) return 'xs'
  if (screenWidth >= 576 && screenWidth < 768) return 'sm'
  if (screenWidth >= 768 && screenWidth < 992) return 'md'
  if (screenWidth >= 992 && screenWidth < 1200) return 'lg'
  if (screenWidth >= 1200 && screenWidth < 1600) return 'xl'
  if (screenWidth >= 1600) return 'xxl'
  return 'lg'
}

export default {
  sizeBreakPoint,
}
