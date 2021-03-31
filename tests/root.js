module.exports =
{
  // you can search for content with the quick search bar
  quick_search_works: function (browser)
  {
    browser
      .url('https://www.pdq.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'PowerShell')
      .keys('')
      .assert.urlContains('?q=PowerShell')
      .end()
  },


      // free trial link takes you to a registration page
        free_trial_links_work: function (browser)
        {
          browser
            .url('https://www.pdq.com')
            .waitForElementVisible('body', 1000)
            .assert.visible('[data-test-id="start-trial-cta-link"]',"Start trial link is visible")
            .click('[data-test-id="start-trial-cta-link"]')
            .assert.urlContains('Register?trial=true')
            .end()
        },


       // we have a link somewhere on the page to schedule a demo
       demo_link_exists: function (browser)
       {
           browser
             .url('https://www.pdq.com')
             .waitForElementVisible('body', 1000)
             .assert.visible('[class="css-1n5wu80"]',"Schedule demo link is visible")
             .click('a[class="css-1n5wu80"]')
             .waitForElementVisible('body', 1000)
             .windowHandles(function (result) {
                              var handle = result.value[1];
                              browser.switchWindow(handle);
                               })
             .assert.urlContains('45-minute-product-demo')
             .closeWindow();
              browser
              .windowHandles(function (result) {
                                            var handle = result.value[0];
                                            browser.switchWindow(handle);
                                             })

              .assert.urlContains('pdq.com')
              .end();

       },

       // dropdown menus are navigable
         dropdown_menus_work: function (browser)
         {
             browser
             .url('https://www.pdq.com')
             .waitForElementVisible('body', 1000)
             .maximizeWindow()
             .moveToElement('button[data-test-id="resources"]', 100, 100, function ()
             {
                       browser
                          .click('button[data-test-id="resources"]')
                          .assert.visible('[data-test-id="support-menu-button"]',"Support menu")
                          .click('[data-test-id="support-menu-button"]')
                          .assert.urlContains('help.pdq.com')
                          .back()
                          .click('button[data-test-id="resources"]')

                          .assert.visible('[data-test-id="videos-menu-button"]', "Videos menu")
                          .click('[data-test-id="videos-menu-button"]')
                          .assert.urlContains('youtube.com')
                          .back()
                          .click('button[data-test-id="resources"]')

                          .assert.visible('[data-test-id="blog-menu-button"]',"Blog menu")
                          .click('[data-test-id="blog-menu-button"]')
                          .assert.urlContains('/blog')
                          .click('button[data-test-id="resources"]')

                          .assert.visible('[data-test-id="powershell-menu-button"]',"Powershell menu")
                          .click('[data-test-id="powershell-menu-button"]')
                          .assert.urlContains('/powershell')
                          .click('button[data-test-id="resources"]')

                          .assert.visible('[data-test-id="webcast-menu-button"]',"Webcast menu")
                          .click('[data-test-id="webcast-menu-button"]')
                           .assert.urlContains('live.pdq.com')
                           .back()
                           .click('button[data-test-id="resources"]')

                          .assert.visible('[data-test-id="getting-started-menu-button"]',"Getting started menu")
                          .click('[data-test-id="getting-started-menu-button"]')
                            .assert.urlContains('getting-started')
                            .click('button[data-test-id="resources"]')

                          .assert.visible('[data-test-id="system-requirements-menu-button"]',"System requirements menu")
                          .click('[data-test-id="system-requirements-menu-button"]')
                            .assert.urlContains('system-requirements')
                              .click('button[data-test-id="resources"]')

                          .assert.visible('[data-test-id="roi-calculator-menu-button"]',"ROI menu")
                          .click('[data-test-id="roi-calculator-menu-button"]')
                           .assert.urlContains('roi')
                             .click('button[data-test-id="resources"]')

                          .assert.visible('[data-test-id="search-menu-button"]',"Search menu")
                          .click('[data-test-id="search-menu-button"]')
                           .assert.urlContains('search')
                            .click('button[data-test-id="resources"]')

                          .assert.visible('[data-test-id="careers-menu-button"]',"Careers menu")
                          .click('[data-test-id="careers-menu-button"]')
                          .assert.urlContains('careers')
                          .click('button[data-test-id="resources"]')

                          .assert.visible('[data-test-id="contact-menu-button"]',"Contact menu")
                          .click('[data-test-id="contact-menu-button"]')
                           .assert.urlContains('contact')

             })

             .end();
         },

         // all footer links work
           footer_links_work: function (browser) {
             const footerlinks = [
               'PDQ Deploy',
               'PDQ Inventory',
               'Enterprise SL',
               'Pricing',
               'Downloads',
               'Licensing',
               'Buy',
               'Support',
               'Videos',
               'Blog',
               'PowerShell',
               'Webcast',
               'Getting Started',
               'ROI Calculator',
               'Search',
               'About',
               'Tax Documents',
               'Contact',
               'Careers',
               'Documentation',
               'Privacy Policy',
               'Terms of Use'
             ]

             browser
                          .url('https://www.pdq.com')
                          .waitForElementVisible('body', 1000)
                          .maximizeWindow()

             footerlinks.forEach(potentialFooterLink  => {
             browser.expect.element(potentialFooterLink,'link text').present;
             browser.getAttribute('link text', potentialFooterLink, 'href', function(result){
             console.log(result.value);
                  });
                 });

             browser.end()
           }

  }
