# password-generator

## Purpose

Generates random password and gives the user a choice to include or not include one or more of the following characters:

```
- lowercase (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z)
- uppercase (A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)
- numbers (1,2,3,4,5,6,7,8,9,0)
- special characters (i.e "!,~,@,#,$,%,^,&,*,(,),_-,+,=,/,{,},<,>,[,]")
```

## User functionality

1. Press the <span style="color:red">RED</span> "Generate Password" button.

![Generate Password button]()

2. A pop-up will appear and ask you to select a character length between 8 - 128.

   - If number between 8 - 128 is chosen; an alert will announce how long your password will be based on what the user selected between 8 - 128.

   - If a number is not selected it returns "Please enter a valid number"

   - If a number that is less than 8 or greater than 120 is selected returns "Please enter a valid length"

3. User will be prompted to Select "Ok" if they want a certain character type or "Cancel" if they would like to not include a certain character type.

   - An alert will come up telling the user that it will or will not include the character they selecter or not.
   - If user did select character the displayPassword variable will concatenate with the selections the user made.

4. Generate Password
   - If user did not select any criteria for characters: returns "Please select at least one character type."
     -If user selected at lease one criteria for characters: returns password based on criteria chosen.
