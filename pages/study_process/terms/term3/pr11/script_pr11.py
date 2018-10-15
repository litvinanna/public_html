from sys import argv

indata = open(argv[1], 'r')
gff = indata.readlines()
indata.close()
indata = open(argv[2], 'r')
sco = indata.readlines()
indata.close()


def fetch_gff(file):
	mur = []
	for line in file:
		if line[0]!='#':
			col=line.split()
			if col[2]=='CDS':
				if col[6] == '+':
					mur.append([int(col[3]), int(col[4])]) 
				elif col[6] == '-':
					mur.append([int(col[4]), int(col[3])]) 
	return mur


def fetch_sco(file):
	mur = []
	for line in file:
		if line[0] != '#':
			col = line.split('_')
			a = col[3].strip()
			if a == '+':
					mur.append([int(col[1]), int(col[2])]) 
			elif a == '-':
					mur.append([int(col[2]), int(col[1])]) 
	return mur
genbank = fetch_gff(gff)
prodigal = fetch_sco(sco)
both = 0
onlyn = 0
onlyc = 0
for i in prodigal:
	for j in genbank:
		n = (i[0] == j[0])
		c = (i[1] == j[1])
		if n and c:
			both +=1
		elif n and not c:
			onlyn +=1
		elif not n and c:
			onlyc +=1
predicted = both + onlyn + onlyc
def pr(x, total):
	a = float(x)/len(total) * 100
	b = str(round(a, 1)) + '%'
	return b
np = len(genbank)- predicted
wp = len(prodigal) - predicted
	
print 'same\t' , both,'\t', pr(both, genbank)
print 'N\t', onlyn, '\t', pr(onlyn, genbank)
print 'C\t', onlyc,'\t', pr(onlyc, genbank)
print 'not predicted\t', np, '\t',pr(np, genbank)
print 'wrong predicted\t', wp, '\t', pr(wp, prodigal)




