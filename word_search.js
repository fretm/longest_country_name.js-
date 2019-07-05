function search_word(paragraph , word){
    
    var x = 0, y=0;
   
    for (i=0;i< paragraph.length;i++)
        {
        if(paragraph[i] == word[0])
            
            {
            for(j=i;j< i+word.length;j++)
               {
                if(paragraph[j]==word[j-i])
                  {
                      y++;
                    }
                    if (y==word.length){
                        x++;
                    }
                }
                y=0;
            }
        }
       return "'"+word+"' was found "+x+" times.";
    }
    
    console.log(search_word('time to sleep time to sleep', 'sleep'));
    console.log(search_word('cat, cat, dog, dog, kit', 'dog'));
