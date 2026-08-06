# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\signup.feature.spec.js >> Create new user with valid credentials >> User Creates the valid login user >> Example #2
- Location: .features-gen\tests\features\signup.feature.spec.js:13:5

# Error details

```
Test timeout of 40000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=f23e1]:
  - banner [ref=f23e2]:
    - generic [ref=f23e5]:
      - link [ref=f23e8] [cursor=pointer]:
        - /url: /
        - img "Automation Exercise website" [ref=f23e9]
      - list [ref=f23e12]:
        - listitem [ref=f23e13]:
          - link " Home" [ref=f23e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f23e15]: 
            - text: Home
        - listitem [ref=f23e16]:
          - link " Products" [ref=f23e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f23e18]: 
            - text: Products
        - listitem [ref=f23e19]:
          - link " Cart" [ref=f23e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f23e21]: 
            - text: Cart
        - listitem [ref=f23e22]:
          - link " Signup / Login" [ref=f23e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f23e24]: 
            - text: Signup / Login
        - listitem [ref=f23e25]:
          - link " Test Cases" [ref=f23e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f23e27]: 
            - text: Test Cases
        - listitem [ref=f23e28]:
          - link " API Testing" [ref=f23e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f23e30]: 
            - text: API Testing
        - listitem [ref=f23e31]:
          - link " Video Tutorials" [ref=f23e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f23e33]: 
            - text: Video Tutorials
        - listitem [ref=f23e34]:
          - link " Contact us" [ref=f23e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f23e36]: 
            - text: Contact us
  - generic [ref=f23e40]:
    - heading "Account Created!" [level=2] [ref=f23e41]
    - paragraph [ref=f23e42]: Congratulations! Your new account has been successfully created!
    - paragraph [ref=f23e43]:
      - text: You can now take advantage of member privileges to enhance your online
      - link "shopping" [ref=f23e44] [cursor=pointer]:
        - /url: "#"
      - text: experience with us.
    - link "Continue" [ref=f23e48] [cursor=pointer]:
      - /url: /
  - contentinfo [ref=f23e49]:
    - generic [ref=f23e54]:
      - heading "Subscription" [level=2] [ref=f23e55]
      - generic [ref=f23e56]:
        - textbox "Your email address" [ref=f23e57]
        - button "" [ref=f23e58] [cursor=pointer]
        - paragraph [ref=f23e60]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f23e64]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=f23e66]:
    - generic [ref=f23e69]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=f23e71]: Discover more
      - link "Development Tools" [ref=f23e72] [cursor=pointer]
      - link "TV & Video" [ref=f23e77] [cursor=pointer]
      - link "Visual Art & Design" [ref=f23e82] [cursor=pointer]
```