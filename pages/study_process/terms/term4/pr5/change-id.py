from sys import argv

inname = argv[1]
indata = open(inname, 'r')
path = inname[0:-6]
outname = path + '-changed.fasta'
outdata = open (outname, 'w')

for line in indata:
    if line[0] == '>':
        namendx = line.find('_')
        name = line[namendx+1: namendx+7]
	find = name.find(' ')
	if find is not None:
             name = name[0:find]
        s = '>' + name + '|' + path.upper() + '\n'
        outdata.write(s)
    else:
        outdata.write(line)

indata.close()
outdata.close()
