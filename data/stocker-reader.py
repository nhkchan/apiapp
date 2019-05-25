import os
rootdir = "./"
dir = "./Stocks_new/"
dirs = os.listdir(dir)

def prep_ticker():
    for file in dirs:
        splfile=file.split(".")
        ticker=splfile[0]

        # Open files
        f = open(rootdir+"Stocks/"+file, "r")
        n = open(dir+ticker+"."+splfile[1]+".new.txt", "x")
        
        for line in f:
            newline=line.rstrip('\r\n')
            values=newline.split(",")
            values.insert(0,ticker)
            ln=","
            ln2=ln.join(values)
            ln2=ln2+"\n"

            # Write to new file
            n.write(ln2)

        # Close files
        f.close()
        n.close()
        print(ticker+"."+splfile[1]+".new.txt completed")

def concat_alltickers():
    with open(rootdir+"allstocks.new.txt", "x") as n:
        for file in dirs:
            splfile=file.split(".")
            ticker=splfile[0]
            with open(dir+file, "r") as f:
                first_line = f.readline()
                for line in f:
                    n.write(line)

concat_alltickers()