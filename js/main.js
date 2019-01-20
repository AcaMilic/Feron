(() => {
	const mobileWidth = 979;

	const addMenuBackground = () => {
		const pageWidth = window.innerWidth;
		const boddyOffset = document.body.scrollTop || document.documentElement.scrollTop; 
		const navigation = document.querySelector("header nav");
		
		if(pageWidth > mobileWidth) {
			boddyOffset > 0 ? navigation.classList.add("fn-nav-fixed") : navigation.classList.remove("fn-nav-fixed")
		}
		
	}

	const reorderResponsiveMenu = () => {
		const pageWidth = window.innerWidth;
		const navContainer = document.querySelector("header nav .fn-container");
		const navigation = document.querySelector("header nav .fn-navigation");
		const mobileNavigation = document.querySelector("body > .fn-navigation");

		if (pageWidth <= mobileWidth && navigation) {
			document.body.insertAdjacentElement("afterbegin", navigation);
		} else if (pageWidth > mobileWidth && mobileNavigation) {
			navContainer.insertAdjacentElement("beforeend", mobileNavigation);
		}
		
	}

	const mobileMenuToggle = () => {
		const menuToggle = document.querySelector(".icon");

		menuToggle.addEventListener("click", () =>{
			const mobileNavigation = document.querySelector("body > .fn-navigation");

		mobileNavigation.classList.toggle("fn-navigation-opened");

		})
	}


	const onNavItemClick = () => {
		const navItemList = document.querySelectorAll(".fn-section-link");
		const navItems = [...navItemList];
		navItems.forEach(item => {
			item.addEventListener("click", event => {
				event.preventDefault();
				const sectionId = event.target.getAttribute("href") || event.target.dataset.href;


				scrollToSection(sectionId);


			})
		})
	}

	const scrollToSection = sectionId => {
		let sectionPosition, sectionOffset;
		const navigationHeight = document.querySelector("header nav").offsetHeight;
		const pageWidth = window.innerWidth;

		if(sectionId !== "#") {
			sectionOffset = document.querySelector(sectionId).offsetTop;
			sectionPosition = pageWidth > mobileWidth ? sectionOffset - navigationHeight : sectionOffset; 
		} else {
			sectionPosition = 0;
		}

		window.scrollTo ({
			
			'behavior': 'smooth',
			'left': 0,
			'top': sectionPosition
		})

	}


	window.addEventListener("scroll", () => {
		addMenuBackground();
	})

	window.addEventListener("resize", () => {
		reorderResponsiveMenu();
	})




	reorderResponsiveMenu();
	mobileMenuToggle();
	onNavItemClick();

})();

