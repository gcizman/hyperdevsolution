from collections import defaultdict
def checking_anagram(keywords):
    agrms = defaultdict(list)
    for word in keywords:
        s = ''.join(sorted(word))
        agrms[s].append(word)
    return list(agrms.values())
keywords = ("eat","tea","tan","ate","nat","bat")
print(checking_anagram(keywords))
