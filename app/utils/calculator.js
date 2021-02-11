export function priceCalculator(service, destiny, unit) {
  if (service === 'Local' && unit === 'Camioneta de 3 1/2') {
    return '$2,500.00 m.n.'
  }
  if (service === 'Local' && unit === 'Thorton') {
    return '$3,500.00 m.n.'
  }
  if (service === 'Local' && unit === 'Trailer') {
    return '$4,500.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Chalco' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$4,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Chalco' && unit === 'Thorton') {
    return '$5,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Chalco' && unit === 'Trailer') {
    return '$6,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Acapulco' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$19,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Acapulco' && unit === 'Thorton') {
    return '$21,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Acapulco' && unit === 'Trailer') {
    return '$24,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Aguascalientes' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$18,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Aguascalientes' &&
    unit === 'Thorton'
  ) {
    return '$21,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Aguascalientes' &&
    unit === 'Trailer'
  ) {
    return '$23,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Apodaca N.L.' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$19,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Apodaca N.L.' &&
    unit === 'Thorton'
  ) {
    return '$22,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Apodaca N.L.' &&
    unit === 'Trailer'
  ) {
    return '$24,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Cabos' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$48,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Cabos' && unit === 'Thorton') {
    return '$56,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Cabos' && unit === 'Trailer') {
    return '$62,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Cadereyta N.L.' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$19,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Cadereyta N.L.' &&
    unit === 'Thorton'
  ) {
    return '$21,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Cadereyta N.L.' &&
    unit === 'Trailer'
  ) {
    return '$24,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Cancun' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$52,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Cancun' && unit === 'Thorton') {
    return '$58,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Cancun' && unit === 'Trailer') {
    return '$62,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Celaya' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$10,500.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Celaya' && unit === 'Thorton') {
    return '$12,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Celaya' && unit === 'Trailer') {
    return '$15,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Chihuahua' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$48,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Chihuahua' && unit === 'Thorton') {
    return '$53,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Chihuahua' && unit === 'Trailer') {
    return '$58,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Cholula' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$8,500.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Cholula' && unit === 'Thorton') {
    return '$9,500.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Cholula' && unit === 'Trailer') {
    return '$11,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Cuernavaca' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$7,500.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Cuernavaca' && unit === 'Thorton') {
    return '$8,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Cuernavaca' && unit === 'Trailer') {
    return '$9,500.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Culiacán' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$41,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Culiacán' && unit === 'Thorton') {
    return '$44,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Culiacán' && unit === 'Trailer') {
    return '$48,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Guadalajara' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$19,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Guadalajara' &&
    unit === 'Thorton'
  ) {
    return '$21,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Guadalajara' &&
    unit === 'Trailer'
  ) {
    return '$23,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Hermosillo' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$68,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Hermosillo' && unit === 'Thorton') {
    return '$72,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Hermosillo' && unit === 'Trailer') {
    return '$78,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Irapuato' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$17,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Irapuato' && unit === 'Thorton') {
    return '$19,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Irapuato' && unit === 'Trailer') {
    return '$21,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'León' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$17,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'León' && unit === 'Thorton') {
    return '$19,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'León' && unit === 'Trailer') {
    return '$22,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Mazatlán' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$24,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Mazatlán' && unit === 'Thorton') {
    return '$28,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Mazatlán' && unit === 'Trailer') {
    return '$31,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Mérida' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$42,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Mérida' && unit === 'Thorton') {
    return '$49,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Mérida' && unit === 'Trailer') {
    return '$56,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Monterrey' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$19,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Monterrey' && unit === 'Thorton') {
    return '$21,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Monterrey' && unit === 'Trailer') {
    return '$24,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Oaxaca' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$24,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Oaxaca' && unit === 'Thorton') {
    return '$27,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Oaxaca' && unit === 'Trailer') {
    return '$32,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Pachuca' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$7,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Pachuca' && unit === 'Thorton') {
    return '$8,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Pachuca' && unit === 'Trailer') {
    return '$9,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Poza Rica' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$14,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Poza Rica' && unit === 'Thorton') {
    return '$16,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Poza Rica' && unit === 'Trailer') {
    return '$18,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Puebla' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$8,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Puebla' && unit === 'Thorton') {
    return '$9,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Puebla' && unit === 'Trailer') {
    return '$12,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Puerto Vallarta' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$31,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Puerto Vallarta' &&
    unit === 'Thorton'
  ) {
    return '$34,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Puerto Vallarta' &&
    unit === 'Trailer'
  ) {
    return '$38,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Querétaro' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$9,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Querétaro' && unit === 'Thorton') {
    return '$10,500.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Querétaro' && unit === 'Trailer') {
    return '$12,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'San Luis Potosí' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$15,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'San Luis Potosí' &&
    unit === 'Thorton'
  ) {
    return '$17,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'San Luis Potosí' &&
    unit === 'Trailer'
  ) {
    return '$19,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Toluca' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$7,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Toluca' && unit === 'Thorton') {
    return '$8,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Toluca' && unit === 'Trailer') {
    return '$9,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Torreón' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$28,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Torreón' && unit === 'Thorton') {
    return '$31,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Torreón' && unit === 'Trailer') {
    return '$34,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Tuxtla Gutiérrez' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$31,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Tuxtla Gutiérrez' &&
    unit === 'Thorton'
  ) {
    return '$36,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Tuxtla Gutiérrez' &&
    unit === 'Trailer'
  ) {
    return '$40,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Veracruz' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$19,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Veracruz' && unit === 'Thorton') {
    return '$21,000.00 m.n.'
  }
  if (service === 'Foráneo' && destiny === 'Veracruz' && unit === 'Trailer') {
    return '$24,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Villahermosa' &&
    unit === 'Camioneta de 3 1/2'
  ) {
    return '$28,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Villahermosa' &&
    unit === 'Thorton'
  ) {
    return '$32,000.00 m.n.'
  }
  if (
    service === 'Foráneo' &&
    destiny === 'Villahermosa' &&
    unit === 'Trailer'
  ) {
    return '$36,000.00 m.n.'
  }

  return 'no aplica'
}
