from sys import argv

indata = open(argv[1], 'r')
file = indata.readlines()
indata.close()


for i in range(len(file)):
	file[i] = file[i].split()
out = []
 
for i in file:
        proof = 1
	for j in out:
		if i[2] == j[0]:
			j[1] +=1
			proof = proof * 0
	if proof == 1:
		out.append([i[2], 1])
def output(line):
	s = ''
	s = s + str(line[0]) + '\t' + str(line[1]) + '\n'
	return s
mur = 'coverage\tnumber-of-reads\n'
for i in out:
	mur = mur + output(i)
print mur

		
			
