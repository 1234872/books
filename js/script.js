$(document).ready(function(){
	window.onscroll = function(){
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		var o = document.querySelector('.header')
		if(scrolled > 28){
			o.classList.add('_fix');
			o.classList.remove('_not_fix');
		}else{
			o.classList.remove('_fix');
			o.classList.add('_not_fix');
		}
	}


	
		$('.header__discoverer-of-a-spoiler').click(function(event) {
			if($(window).width() <= 600) {
				$(this).toggleClass('active').next().slideToggle(300);
			}
		});
		$(window).resize(function(){
			if($(window).width() <= 600){
				if($('.header__discoverer-of-a-spoiler').hasClass('active')){
					$('.header__discoverer-of-a-spoiler').toggleClass('active').next().slideToggle(300);	
				}else{
								
				}
			}else{
				if($('.header__discoverer-of-a-spoiler').hasClass('active')){
					
				}else{
					$('.header__discoverer-of-a-spoiler').toggleClass('active').next().slideToggle(300);					
				}
			}
		});

	$('.footer__title').click(function(event) {
		$(this).toggleClass('_active').next().slideToggle(300);
	});


	
	$('.theme__head_title').click(function(event) {
		if($(window).width() <= 600) {
			$(this).toggleClass('active').next().slideToggle(300);
		}
	});
	$(window).resize(function(){
		if($(window).width() <= 600){
			if($('.theme__head_title').hasClass('active')){

			}else{
				$('.theme__head_title').toggleClass('active').next().slideToggle(300);				
			}
		}else{
			if($('.theme__head_title').hasClass('active')){
				$('.theme__head_title').toggleClass('active').next().slideToggle(300);
			}			
		}
	});







	$('.header__search button').click(function(event) {
		if(document.querySelector('.header__search input').classList.contains('_big_input')){
			document.querySelector('.header__search input').classList.remove('_big_input');
			document.querySelector('.header__search button').classList.remove('_button-with-input');
			document.querySelector('.header__logo').classList.remove('_logo_none');		
		}else{
			document.querySelector('.header__search input').classList.add('_big_input');
			document.querySelector('.header__search button').classList.add('_button-with-input');
			document.querySelector('.header__logo').classList.add('_logo_none');	
		}
	});

	$('.header__search input').click(function(event) {
		if((document.querySelector('.header__search input').classList.contains('_big_input'))){

		}else{
			document.querySelector('.header__search input').classList.add('_big_input');
			document.querySelector('.header__search button').classList.add('_button-with-input');
			document.querySelector('.header__logo').classList.add('_logo_none');	
		}
	});






//----------------------------------------------------------------------------	
	var $tabs = function (target) {
		
		var
		  _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
		  _eventTabsShow,
		  _showTab = function (tabsLinkTarget) {
			 var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
			 tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
			 tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active1');
			 tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show1');
			 // если следующая вкладка равна активной, то завершаем работу
			 if (tabsLinkTarget === tabsLinkActive) {
				return;
			 }
			 // удаляем классы у текущих активных элементов
			 if (tabsLinkActive !== null) {
				tabsLinkActive.classList.remove('tabs__link_active1');
			 }
			 if (tabsPaneShow !== null) {
				tabsPaneShow.classList.remove('tabs__pane_show1');
			 }
			 // добавляем классы к элементам (в завимости от выбранной вкладки)
			 tabsLinkTarget.classList.add('tabs__link_active1');
			 tabsPaneTarget.classList.add('tabs__pane_show1');
			 document.dispatchEvent(_eventTabsShow);
		  },
		  _switchTabTo = function (tabsLinkIndex) {
			 var tabsLinks = _elemTabs.querySelectorAll('.tabs__link1');
			 if (tabsLinks.length > 0) {
				if (tabsLinkIndex > tabsLinks.length) {
				  tabsLinkIndex = tabsLinks.length;
				} else if (tabsLinkIndex < 1) {
				  tabsLinkIndex = 1;
				}
				_showTab(tabsLinks[tabsLinkIndex - 1]);
			 }
		  };
	 
		_eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });
	 
		_elemTabs.addEventListener('click', function (e) {
		  var tabsLinkTarget = e.target;
		  // завершаем выполнение функции, если кликнули не по ссылке
		  if (!tabsLinkTarget.classList.contains('tabs__link1')) {
			 return;
		  }
		  // отменяем стандартное действие
		  e.preventDefault();
		  _showTab(tabsLinkTarget);
		});
	 
		return {
		  showTab: function (target) {
			 _showTab(target);
		  },
		  switchTabTo: function (index) {
			 _switchTabTo(index);
		  }
		}
	 
	 };
	 
	 $tabs('.tabs1');
//----------------------------------------------------------------------------	
var $tabs = function (target) {
		
	var
	  _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
	  _eventTabsShow,
	  _showTab = function (tabsLinkTarget) {
		 var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
		 tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
		 tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active2');
		 tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show2');
		 // если следующая вкладка равна активной, то завершаем работу
		 if (tabsLinkTarget === tabsLinkActive) {
			return;
		 }
		 // удаляем классы у текущих активных элементов
		 if (tabsLinkActive !== null) {
			tabsLinkActive.classList.remove('tabs__link_active2');
		 }
		 if (tabsPaneShow !== null) {
			tabsPaneShow.classList.remove('tabs__pane_show2');
		 }
		 // добавляем классы к элементам (в завимости от выбранной вкладки)
		 tabsLinkTarget.classList.add('tabs__link_active2');
		 tabsPaneTarget.classList.add('tabs__pane_show2');
		 document.dispatchEvent(_eventTabsShow);
	  },
	  _switchTabTo = function (tabsLinkIndex) {
		 var tabsLinks = _elemTabs.querySelectorAll('.tabs__link2');
		 if (tabsLinks.length > 0) {
			if (tabsLinkIndex > tabsLinks.length) {
			  tabsLinkIndex = tabsLinks.length;
			} else if (tabsLinkIndex < 1) {
			  tabsLinkIndex = 1;
			}
			_showTab(tabsLinks[tabsLinkIndex - 1]);
		 }
	  };
 
	_eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });
 
	_elemTabs.addEventListener('click', function (e) {
	  var tabsLinkTarget = e.target;
	  // завершаем выполнение функции, если кликнули не по ссылке
	  if (!tabsLinkTarget.classList.contains('tabs__link2')) {
		 return;
	  }
	  // отменяем стандартное действие
	  e.preventDefault();
	  _showTab(tabsLinkTarget);
	});
 
	return {
	  showTab: function (target) {
		 _showTab(target);
	  },
	  switchTabTo: function (index) {
		 _switchTabTo(index);
	  }
	}
 
 };
 
 $tabs('.tabs2');
 //----------------------------------------------------------------------------	
var $tabs = function (target) {
		
	var
	  _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
	  _eventTabsShow,
	  _showTab = function (tabsLinkTarget) {
		 var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
		 tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
		 tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
		 tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
		 // если следующая вкладка равна активной, то завершаем работу
		 if (tabsLinkTarget === tabsLinkActive) {
			return;
		 }
		 // удаляем классы у текущих активных элементов
		 if (tabsLinkActive !== null) {
			tabsLinkActive.classList.remove('tabs__link_active');
		 }
		 if (tabsPaneShow !== null) {
			tabsPaneShow.classList.remove('tabs__pane_show');
		 }
		 // добавляем классы к элементам (в завимости от выбранной вкладки)
		 tabsLinkTarget.classList.add('tabs__link_active');
		 tabsPaneTarget.classList.add('tabs__pane_show');
		 document.dispatchEvent(_eventTabsShow);
	  },
	  _switchTabTo = function (tabsLinkIndex) {
		 var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
		 if (tabsLinks.length > 0) {
			if (tabsLinkIndex > tabsLinks.length) {
			  tabsLinkIndex = tabsLinks.length;
			} else if (tabsLinkIndex < 1) {
			  tabsLinkIndex = 1;
			}
			_showTab(tabsLinks[tabsLinkIndex - 1]);
		 }
	  };
 
	_eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });
 
	_elemTabs.addEventListener('click', function (e) {
	  var tabsLinkTarget = e.target;
	  // завершаем выполнение функции, если кликнули не по ссылке
	  if (!tabsLinkTarget.classList.contains('tabs__link')) {
		 return;
	  }
	  // отменяем стандартное действие
	  e.preventDefault();
	  _showTab(tabsLinkTarget);
	});
 
	return {
	  showTab: function (target) {
		 _showTab(target);
	  },
	  switchTabTo: function (index) {
		 _switchTabTo(index);
	  }
	}
 
 };
 
 $tabs('.tabs');
	 

});