module Cnpj
  def self.generate
    digits = "#{rand(9)}#{rand(9)}#{rand(9)}#{rand(9)}#{rand(9)}#{rand(9)}#{rand(9)}#{rand(9)}#{rand(9)}#{rand(9)}#{rand(9)}#{rand(9)}"

    first_digit = self.calculate_digit(digits, :first)
    second_digit = self.calculate_digit("#{digits}#{first_digit}", :second)
    "#{digits}#{first_digit}#{second_digit}"
  end

  private
  def self.calculate_digit(numbers, type)
    digits = { :first => [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
               :second => [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] }

    digit = 0
    (0...numbers.size).each { |i| digit = digit + numbers[i].to_i * digits[type.to_sym][i] }
    digit = (digit % 11) < 2 ? 0 : 11 - (digit % 11)

    digit
  end
end
