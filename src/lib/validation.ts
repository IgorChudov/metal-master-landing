export function isValidRussianPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, "");
  return /^(7|8)\d{10}$/.test(cleaned);
}