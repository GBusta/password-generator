# password-generator

## Deployable URL link 
<a href="https://gbusta.github.io/password-generator/">gbusta.github.io/password-generator/</a>

## Github Repo Link


## Purpose

Generates random password and gives the user a choice to include or not include one or more of the following characters:

```
- lowercase (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z)
- uppercase (A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)
- numbers (1,2,3,4,5,6,7,8,9,0)
- special characters (i.e "!,~,@,#,$,%,^,&,*,(,),_-,+,=,/,{,},<,>,[,]")
```

## User functionality

1. Click the <span style="color:red">RED</span> "Generate Password" button.

2. A prompt will appear and ask you to select a character length between 8 - 128.

![Character Length prompt](/assets/images/character-length.jpg)

- If number between 8 - 128 is chosen; an alert will announce how long your password will be based on what the user selected between 8 - 128.

- If a number is not selected it returns "Please enter a valid length"

  ![Please Enter Vald Length](/assets/images/please-enter-valid-length.jpg)

- If a number that is less than 8 or greater than 120 is selected returns "Please enter a valid length"

  ![Please Enter Vald Length](/assets/images/please-enter-valid-length.jpg)

3. User will be prompted to Select "Ok" if they want a certain character type or "Cancel" if they would like to not include a certain character type.

- An alert will come up telling the user that it will or will not include the character they selected or not.

  ![Confirm Character Selection](/assets/images/character-selection-confim.jpg)

- If user did select character the displayPassword variable will concatenate with the selections the user made.

4. Generate Password

- If user did not select any criteria for characters: returns "Please select at least one character type."

  ![Select a character type](/assets/images/select-one-character-type.jpg)

- If user selected at lease one criteria for characters: returns password based on criteria chosen.

  ![Password Generated](/assets/images/password-generated.jpg)
