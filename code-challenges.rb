# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
num4 = 0
# Expected output: 'num is 0'

def only_odd num
  if num == 0
    'num is 0'
  elsif num.even?
    "#{num} is even"
  else num.odd?
    "#{num} is odd"
  end
end
p only_odd num1
p only_odd num2
p only_odd num3
p only_odd num4



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel_be_gone str
  lower_case = str.downcase
  lower_case.delete "aeiou"
end
p vowel_be_gone album1
p vowel_be_gone album2
p vowel_be_gone album3




# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome str
  lower_case = str.downcase
  if lower_case == lower_case.reverse
     "#{str} is a palindrome"
  else
     "#{str} is not a palindrome"
  end
end
p palindrome is_palindrome1
p palindrome is_palindrome2
p palindrome is_palindrome3
