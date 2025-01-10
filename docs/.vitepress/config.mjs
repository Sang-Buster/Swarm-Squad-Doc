import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Swarm Squad",
  description: "A simulation framework for multi-agent systems.",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  markdown: {math: true},
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Doc', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Get Started', link: '/markdown-examples' },
          { text: 'Demo', link: '/api-examples' }
        ]
      }
    ],

    search: {provider: 'local'},

    socialLinks: [
      { icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.88401 18.6533C5.58404 18.4526 5.32587 18.1975 5.0239 17.8369C4.91473 17.7065 4.47283 17.1524 4.55811 17.2583C4.09533 16.6833 3.80296 16.417 3.50156 16.3089C2.9817 16.1225 2.7114 15.5499 2.89784 15.0301C3.08428 14.5102 3.65685 14.2399 4.17672 14.4263C4.92936 14.6963 5.43847 15.1611 6.12425 16.0143C6.03025 15.8974 6.46364 16.441 6.55731 16.5529C6.74784 16.7804 6.88732 16.9182 6.99629 16.9911C7.20118 17.1283 7.58451 17.1874 8.14709 17.1311C8.17065 16.7489 8.24136 16.3783 8.34919 16.0358C5.38097 15.3104 3.70116 13.3952 3.70116 9.63971C3.70116 8.40085 4.0704 7.28393 4.75917 6.3478C4.5415 5.45392 4.57433 4.37284 5.06092 3.15636C5.1725 2.87739 5.40361 2.66338 5.69031 2.57352C5.77242 2.54973 5.81791 2.53915 5.89878 2.52673C6.70167 2.40343 7.83573 2.69705 9.31449 3.62336C10.181 3.41879 11.0885 3.315 12.0012 3.315C12.9129 3.315 13.8196 3.4186 14.6854 3.62277C16.1619 2.69 17.2986 2.39649 18.1072 2.52651C18.1919 2.54013 18.2645 2.55783 18.3249 2.57766C18.6059 2.66991 18.8316 2.88179 18.9414 3.15636C19.4279 4.37256 19.4608 5.45344 19.2433 6.3472C19.9342 7.28337 20.3012 8.39208 20.3012 9.63971C20.3012 13.3968 18.627 15.3048 15.6588 16.032C15.7837 16.447 15.8496 16.9105 15.8496 17.4121C15.8496 18.0765 15.8471 18.711 15.8424 19.4225C15.8412 19.6127 15.8397 19.8159 15.8375 20.1281C16.2129 20.2109 16.5229 20.5077 16.6031 20.9089C16.7114 21.4504 16.3602 21.9773 15.8186 22.0856C14.6794 22.3134 13.8353 21.5538 13.8353 20.5611C13.8353 20.4708 13.836 20.3417 13.8375 20.1145C13.8398 19.8015 13.8412 19.599 13.8425 19.4094C13.8471 18.7019 13.8496 18.0716 13.8496 17.4121C13.8496 16.7148 13.6664 16.2602 13.4237 16.051C12.7627 15.4812 13.0977 14.3973 13.965 14.2999C16.9314 13.9666 18.3012 12.8177 18.3012 9.63971C18.3012 8.68508 17.9893 7.89571 17.3881 7.23559C17.1301 6.95233 17.0567 6.54659 17.199 6.19087C17.3647 5.77663 17.4354 5.23384 17.2941 4.57702L17.2847 4.57968C16.7928 4.71886 16.1744 5.0198 15.4261 5.5285C15.182 5.69438 14.8772 5.74401 14.5932 5.66413C13.7729 5.43343 12.8913 5.315 12.0012 5.315C11.111 5.315 10.2294 5.43343 9.40916 5.66413C9.12662 5.74359 8.82344 5.69492 8.57997 5.53101C7.8274 5.02439 7.2056 4.72379 6.71079 4.58376C6.56735 5.23696 6.63814 5.77782 6.80336 6.19087C6.94565 6.54659 6.87219 6.95233 6.61423 7.23559C6.01715 7.8912 5.70116 8.69376 5.70116 9.63971C5.70116 12.8116 7.07225 13.9683 10.023 14.2999C10.8883 14.3971 11.2246 15.4769 10.5675 16.0482C10.3751 16.2156 10.1384 16.7802 10.1384 17.4121V20.5611C10.1384 21.5474 9.30356 22.2869 8.17878 22.09C7.63476 21.9948 7.27093 21.4766 7.36613 20.9326C7.43827 20.5204 7.75331 20.2116 8.13841 20.1276V19.1381C7.22829 19.1994 6.47656 19.0498 5.88401 18.6533Z"></path></svg>'}, 
        link: 'https://github.com/Swarm-Squad/Swarm-Squad',
        ariaLabel: 'github'},
      { icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.54429 2.67305C5.81644 2.49995 6.13587 2.41612 6.45799 2.43329C6.78102 2.4505 7.09056 2.56841 7.34318 2.77049L7.34405 2.77119C7.59044 2.96879 7.76998 3.2372 7.85866 3.5399L9.30537 7.96754H14.6944L16.1411 3.5399C16.2298 3.23722 16.4093 2.96879 16.6557 2.77116L16.6604 2.76745C16.9128 2.56777 17.2209 2.45133 17.5424 2.43423C17.8638 2.41712 18.1826 2.50023 18.4547 2.67197L18.4571 2.67347C18.7307 2.84735 18.9427 3.10328 19.0624 3.40486L19.0664 3.41491L21.5393 9.86622C21.9619 10.9712 22.0136 12.1836 21.6865 13.3205C21.3594 14.4574 20.6715 15.457 19.7263 16.1685L12.9955 21.2331L12.9945 21.2338C12.7066 21.4513 12.3554 21.5692 11.9943 21.5692C11.6332 21.5692 11.2819 21.4513 10.9939 21.2337L4.26254 16.1683C3.32063 15.4562 2.63541 14.4574 2.30989 13.3224C1.98437 12.1873 2.03616 10.9772 2.45747 9.8741L4.93724 3.40497C5.0571 3.10297 5.26966 2.84673 5.54429 2.67305ZM6.35534 4.73567L4.16029 10.4639C3.87993 11.2013 3.82298 12.0676 4.04049 12.8261C4.25704 13.5811 4.71123 14.2461 5.33544 14.7225L11.9943 19.7329L18.6484 14.7265C19.2789 14.2502 19.7379 13.5822 19.9563 12.8227C20.1751 12.0624 20.1148 11.1847 19.8328 10.4455L17.6444 4.73558L16.0001 9.76791H7.9996L6.35534 4.73567Z"></path></svg>'}, 
        link: 'https://gitlab.com/Swarm-Squad/Swarm-Squad',
        ariaLabel: 'gitlab'}
    ],

    footer: {
      copyright: 'Copyright © 2023-Present Sang Xing',
      message: 'Released under the MIT License.'
    }
  }
})
