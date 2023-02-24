class Solution:
       def groupAnagrams(self, strs):
      result = {} ## incorrect indendation
      for i in strs: ## undefined reference
         x = "".join(sorted())
         if x in result:
            result[x].append(i)
         else:
            result[x] = [i]
      return list(result.values()) ## return outside of function &&
ob1 = Solution()
print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

#@Author:Gcobani Mkontwana#
#@date:24/02/20230
#
#Below are some of the comments to review candidate inability to write code using Python from an Anagram program#


#First of all the program uses a class instead of creating a function#
#Secondly this program has no meaning of understanding how to use python in Anagram#
#Insted of creating a simple python program that will read values when using string as an object data type#
# No consultation to use a proper documentation online how to write an Anagram program#
#The students needs to understand the fundamentals of using language such as Python well#
#Please refer to this URL how to use Anagram in Python and the program uses a function 
#https://www.javatpoint.com/python-program-to-find-anagram#