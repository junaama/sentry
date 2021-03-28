import os
import subprocess
#from subprocess import Popen, PIPE, STDOUT
from flask import request
#s = subprocess.run('tcpdump -p -e -i eth0 not ether src 00:50:56:FE:BE:5D and not src host 192.168.21.145 and not ether src 00:0c:29:1d:0e:aa',shell=True,text=True)
# read value from HTML form tag "input" and store it in add_MAC
# for reference https://forum.boltiot.com/t/how-to-get-from-input-value-to-python-and-form-in-python/7781/3
''' UNCOMMENT THIS BLOCK WHEN PASSING HTML INPUT TO ADD NEW VALID MAC ADDRESSES FROM WEBSITE
add_MAC=request.form['new_MAC']
if add_MAC is not None:
    ll.append(add_MAC)'''
ll = ['00:50:56:FE:BE:5D','00:0C:29:1D:0E:AA'] 
# Initializing empty string and adding all the valid MAC address to s from ll
s=''
for i in ll:
    s=s+ ' and not ether src '+ str(i)
#s=' and not ether src '+ str(l[0])
#:for x in l
# -p is used to indicate not to put the interface in promiscuous mode
# -e is used to print MAC address in tcpdump output
'''
    MAKE SURE TO CHANGE THE 'src host ' IP'S TO THE SERVER IP AND GATEWAY IP
'''
str_extraction=''
str_extraction += 'awk -F"\t" \'{print $2}\' '
st=subprocess.run('tcpdump -e -p -i eth0 not src host 192.168.21.145 and not src host 192.168.21.1 {} '.format(s),shell=True,text=True)#,stdout=subprocess.PIPE)
#st=subprocess.Popen('tcpdump -e -p -i eth0 not src host 192.168.21.145 and src host 192.168.21.1 {}' .format(s),shell=True,stdout=subprocess.PIPE)
#p = subprocess.Popen('awk -F" " \'{print $2}\'',stdin=subprocess.PIPE)#Popen(awk -F" " '{print $2}', stdin=PIPE, stdout=STDOUT)i