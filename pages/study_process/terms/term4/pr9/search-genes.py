from Bio import SeqIO

indata = open('fimo-gb.txt', 'r')

coor = []
for line in indata:
    line = line.split()
    if len(line)>4 and line[4].isnumeric():
        coor.append([int(line[4]), int(line[5])])
print(coor)
indata.close()

record = SeqIO.read(open("bbmn68.gb"), "genbank")
genes = []
for f in record.features:
    if f.type == 'gene':
        for i in coor:
            if f.location.start<= i[0] and f.location.end >= i[1]:
                genes.append(f)

for g in genes:
    print(g.location)