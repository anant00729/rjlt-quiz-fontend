import { string } from "prop-types"

class ValidateArticle {
  validate(state){

    let data = {}
    data = state
    let { next_article_id ,ArticleTemplate, ArticleAuthorName, all_authors, ArticleName, SubTitle, PublishedOn, ReadTime , picturePath}= data
    

    let errors = {}


    if(next_article_id === -1){
      errors.ArticleName = 'API error contact programmer' 
    }
    
    
    if(ArticleName === ''){
      errors.ArticleName = 'Article Name is required' 
    }
   
    if(picturePath === ''){
        errors.picturePath = 'Main Image is required' 
    } 

    if(SubTitle === ''){
      errors.SubTitle = 'Sub Title is required' 
    }

    if(PublishedOn === ''){
      errors.PublishedOn = 'Published On is required' 
    }

    if(ReadTime === ''){
      errors.ReadTime = 'Read Time is required' 
    }

    let _j = 0

    for(var _t of ArticleTemplate){

      if(errors.picturePathAT){
        break
      }

      if(typeof _t.value === "string"){
        if(_t.value === ''){
          errors.picturePathAT = `Error in RNO ${_j + 1}`
          break
        }
        
      }else {
        let _i = 0
        if(_t.value.length > 0){
          for(var _v of _t.value){
            //_v.picturePath = ''
            _v.picture = ''
            if(_v.picturePath === ''){
              errors.picturePathAT = `Error in RNO ${_j + 1} IN ${_i + 1}`
              break;
            }
            ++_i
          }
        }
      }


      ++_j
    }

    
    if(Object.keys(errors).length === 0 ){
      data.imagePreview = ''
      console.log('data in validators :', data );
      return {Status : true , errors , data}
    }else {
      return {Status : false , errors}
    }
  }
}


export default ValidateArticle