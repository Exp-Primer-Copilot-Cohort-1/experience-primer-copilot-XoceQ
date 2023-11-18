function skillsMember(){

    
    var member = document.getElementById('member');
    var memberSkills = document.getElementById('member-skills');
    var memberSkillsList = document.getElementById('member-skills-list');
    var memberSkillsListItems = document.querySelectorAll('#member-skills-list li');
    var memberSkillsListItemsLength = memberSkillsListItems.length;
    var memberSkillsListItemsWidth = 100 / memberSkillsListItemsLength;
    
    memberSkillsList.style.width = memberSkillsListItemsLength * 100 + '%';
    for(var i = 0; i < memberSkillsListItemsLength; i++){
        memberSkillsListItems[i].style.width = memberSkillsListItemsWidth + '%';
    }
    
    memberSkillsList.style.transform = 'translateX(0%)';
    
    memberSkills.addEventListener('click', function(e){
        var target = e.target;
        var targetIndex = target.getAttribute('data-index');
        var targetWidth = targetIndex * memberSkillsListItemsWidth;
        memberSkillsList.style.transform = 'translateX(-' + targetWidth + '%)';
    });
    
    
    
}
