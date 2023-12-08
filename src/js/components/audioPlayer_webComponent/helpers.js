// @ts-nocheck
/**
 * Create a bem class string
 * @param base the base class name
 * @returns {Function} function that takes a class name and returns a bem class string
 */
const className = (base) => (className) =>
  className ? `${base}__${className}` : base

/**
 * Create a class selector string to be used with querySelectors
 * @param baseClass the base class name
 * @returns {Function} function that takes a class name and returns a class selector string
 */
export const classSelector = (baseClass) => {
  const cn = className(baseClass)

  return (className) => `.${cn(className)}`
}

/**
 * Convert seconds to minutes and seconds
 * @param time
 * @returns string of minutes and seconds
 */
export const convertTime = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
  return `${minutes}:${returnedSeconds}`
}
