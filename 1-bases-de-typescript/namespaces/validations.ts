// Una clase donde podemos tener nuestra logica y exponer lo que necesitamos
// Namespace puede agrupar muchas clases. Es un agrupador global
// Se usan bastante cuando se usan frameworks o librerias

namespace Validations {
  export const validateText = (text: string): boolean => (text.length > 3 ? true : false)
  export const validateDate = (date: Date): boolean => (isNaN(date.valueOf()) ? false : true)
}

Validations.validateDate(new Date('hola'))
