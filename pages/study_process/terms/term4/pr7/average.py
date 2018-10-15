from sys import argv

indata = open(argv[1], 'r')
line = indata.read()



coor = line.split(',')
sum = 0

for s in coor:
    left = s.find('(')
    de =  s.find('-')
    right = s.find(')')
    first = int(s[left+1:de].strip())
    second = int(s[de+1:right].strip()) 
    l = second - first +1
    #print(s,first, second)
    #print(l)
    sum += l
average = sum/len(coor)
print(average)
