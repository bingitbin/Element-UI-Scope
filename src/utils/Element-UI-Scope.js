export default {
    install(Vue,options) {
		function getScope(attributes)
{
  if(!attributes)
  {
    return;
  }
   for(let attr of attributes)
      {
        if(attr&&attr.name.indexOf('data-v-')==0)
        {
           return attr.name;
        }
      }
}

async function setScope($el){
  var scope;
   if(!getScope($el.attributes))
  {
    if(!$el.parentElement)
    {
      return;
    }
    scope=getScope($el.parentElement.attributes);
    if(!scope)
    {
      return;
    }
    $el.setAttribute&&$el.setAttribute(scope, '');
  }
  if(!$el.children)
  {
    return;
  }
  for (let elem of $el.children) {
    setScope(elem)
  }
}
	
        Vue.mixin({
            mounted(){
                if(this.$options._componentTag&&this.$options._componentTag.indexOf('el-')==0)
    {
      // var scope;
      // for(let attr of this.$el.attributes)
      // {
      //   if(attr&&attr.name.indexOf('data-v-')==0)
      //   {
      //       scope=attr.name;
      //       break;
      //   }
      // }
      // if(!scope)
      // {
      //   return;
      // }
      this.$nextTick(_=> setScope(this.$el))
      // setTimeout(function(){
      //   setScope(this.$el)
      // }.bind(this),200);
    }
            }
        })
    }
}