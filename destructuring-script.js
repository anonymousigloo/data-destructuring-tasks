/**
 * ============================================================
 * STEP 2: PRACTICE ARRAY DESTRUCTURING
 * ============================================================
 * Extracting values from arrays, skipping elements,
 * assigning variables, rest operator, swapping values
 */

// Sample dataset: colors and more
const colors = ['🔴 Red', '🟢 Green', '🔵 Blue', '🟡 Yellow', '⚫ Black', '⚪ White', '🟣 Purple'];

// 1. Basic destructuring - extract first and fourth elements (skip 2nd and 3rd)
const [primaryColor, , , secondaryColor, ...remainingColors] = colors;

// 2. Skipping elements demonstration: skip 'Green' and 'Blue'
const [first, , , fourth] = colors;  // first = Red, fourth = Yellow

// 3. Swapping variables using array destructuring (classic trick)
let a = 100;
let b = 999;
[a, b] = [b, a]; // swap values

// 4. Using rest operator to collect remaining elements
const [head, ...tail] = colors;

// 5. Default values with array destructuring
const incompleteArray = ['onlyOne'];
const [firstItem, secondItem = 'Default Value'] = incompleteArray;

// Prepare output for array section
const arrayOutputDiv = document.getElementById('arrayOutput');
arrayOutputDiv.innerHTML = `
    <pre>🎯 <strong>Array Destructuring Results</strong>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 <strong>Basic + Skip:</strong>
   const colors = [${colors.join(', ')}]
   const [primary, , , secondary] = colors
   → primary   = "${primaryColor}"
   → secondary = "${secondaryColor}"

📌 <strong>Rest Operator (...remainingColors):</strong>
   remainingColors = [${remainingColors.join(', ')}]

📌 <strong>Variable Swapping (a, b):</strong>
   Before swap → a = 100 , b = 999
   After swap  → a = ${a} , b = ${b}

📌 <strong>Default Values:</strong>
   const ['onlyOne'] with default: first = "${firstItem}", second = "${secondItem}"
    </pre>
`;

/**
 * ============================================================
 * STEP 3: PRACTICE OBJECT DESTRUCTURING
 * ============================================================
 * Extract properties from objects and assign to variables
 * efficiently without dot notation.
 */

const userProfile = {
    id: 42,
    fullName: 'Elena Vasquez',
    role: 'Senior Developer',
    location: 'Barcelona',
    email: 'elena@devstudio.com',
    isActive: true,
    skills: ['React', 'Node.js', 'GraphQL']
};

// Object destructuring - extract multiple properties
const { fullName, role, location, email, skills } = userProfile;

// Extract and assign to new variable names (renaming)
const { id: userId, isActive: accountStatus } = userProfile;

// Nested object destructuring (preview for advanced)
const teamMember = {
    name: 'Alex',
    details: {
        department: 'Engineering',
        yearsActive: 5
    }
};
const { details: { department } } = teamMember;

const objectOutputDiv = document.getElementById('objectOutput');
objectOutputDiv.innerHTML = `
    <pre>🏷️ <strong>Object Destructuring Results</strong>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 <strong>Direct property extraction:</strong>
   const { fullName, role, location, email, skills } = userProfile
   
   • fullName  : "${fullName}"
   • role      : "${role}"
   • location  : "${location}"
   • email     : "${email}"
   • skills[0] : "${skills[0]}"

📌 <strong>Renaming while destructuring:</strong>
   const { id: userId, isActive: accountStatus }
   → userId = ${userId} , accountStatus = ${accountStatus}

📌 <strong>Nested object destructuring (teamMember.details.department):</strong>
   department = "${department}"
    </pre>
`;

/**
 * ============================================================
 * STEP 4: ADVANCED DESTRUCTURING
 * ============================================================
 * Nested destructuring, default values, variable renaming
 * handling complex data structures
 */

const conferenceData = {
    eventName: 'JSWorld 2025',
    venue: {
        name: 'Convention Hall',
        city: 'Austin',
        capacity: 1200,
        address: {
            street: '420 Congress Ave',
            zip: '78701'
        }
    },
    speakers: ['Ada', 'Grace', 'Margaret'],
    sponsors: {
        gold: ['TechCorp', 'DevTools'],
        community: true
    },
    // missing some optional fields to test defaults
    pricing: null
};

// 1. Nested destructuring with renaming
const {
    eventName,
    venue: {
        city: eventCity,          // renaming venue.city → eventCity
        name: venueName,
        address: { street: streetAddress }  // deep nested + rename
    },
    speakers: [mainSpeaker, secondSpeaker],   // array inside object destructuring
    sponsors: { gold: goldSponsors = [] },    // default value for gold
    program = 'TBA'                            // default value for missing property
} = conferenceData;

// 2. Default values in action: missing `year` field
const legacyEvent = {
    title: 'Retro Meetup'
};
const { year = 2024, title: eventTitle } = legacyEvent;

// 3. Combining defaults with nested structures
const userSettings = {
    preferences: {
        theme: 'dark'
        // 'fontSize' is missing intentionally
    }
};
const {
    preferences: {
        theme: selectedTheme,
        fontSize: fontSizePreference = '16px'
    }
} = userSettings;

// 4. Array destructuring with defaults and skipping within advanced context
const rgb = [255, 128];
const [red, green, blue = 0] = rgb;   // blue defaults to 0

const advancedOutputDiv = document.getElementById('advancedOutput');
advancedOutputDiv.innerHTML = `
    <pre>🔥 <strong>Advanced Destructuring (Nested + Defaults + Rename)</strong>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 <strong>Nested & renamed from conferenceData:</strong>
   eventName      : "${eventName}"
   venueName      : "${venueName}"
   eventCity      : "${eventCity}"
   streetAddress  : "${streetAddress}"
   
📌 <strong>Array inside object destructuring (speakers):</strong>
   mainSpeaker    : "${mainSpeaker}", secondSpeaker: "${secondSpeaker}"

📌 <strong>Default values (goldSponsors & program):</strong>
   goldSponsors   : ${JSON.stringify(goldSponsors)}
   program (missing) → default = "${program}"

📌 <strong>Default values for missing properties:</strong>
   legacyEvent.year = ${year}  (default applied)
   fontSize preference = "${fontSizePreference}" (default 16px)
   
📌 <strong>Array with defaults:</strong> rgb = [255,128] → red=${red}, green=${green}, blue(default)=${blue}
    </pre>
`;

/**
 * ============================================================
 * STEP 5: USE DESTRUCTURING IN FUNCTIONS
 * ============================================================
 * Apply destructuring directly in function parameters
 * to simplify code and improve readability.
 */

// 5.1: Destructure object parameter with default values & nested extraction
function displayProductDetails({
    id = 'unknown',
    name = 'Unnamed Product',
    price = 0,
    inStock = false,
    dimensions: { width = 'N/A', height = 'N/A' } = {}
} = {}) {
    return `📦 Product #${id} | ${name} | $${price} | inStock: ${inStock} | Size: ${width} x ${height}`;
}

// 5.2: Function with array destructuring in parameters
function getFirstTwoItems([first, second, ...rest]) {
    return { firstItem: first, secondItem: second, restCount: rest.length };
}

// 5.3: Function to format user profile using destructuring + renaming
function formatUser({
    username: userName,
    email: userEmail,
    age = 'Not provided',
    address: { city: userCity = 'Unknown City' } = {}
}) {
    return `👤 ${userName} (${userEmail}) | Age: ${age} | Location: ${userCity}`;
}

// 5.4: Mixed destructuring: object + nested array
function extractHighlights({
    metadata: { tags = [] },
    content: { featured = false, score = 0 } = {}
}) {
    return `🏷️ Tags: ${tags.join(', ') || 'none'} | Featured: ${featured} | Score: ${score}`;
}

// 5.5: Function using destructuring with default empty object (safe)
function calculateDiscount({ price = 0, discountPercent = 10 } = {}) {
    const discountAmount = (price * discountPercent) / 100;
    return `💰 Discount: $${discountAmount.toFixed(2)} (${discountPercent}% off from $${price})`;
}

// ------- TEST CASES FOR FUNCTION DESTRUCTURING -------
const product1 = {
    id: 'P789',
    name: 'Wireless Headphones',
    price: 79.99,
    inStock: true,
    dimensions: { width: '18cm', height: '20cm' }
};

const product2 = {
    id: 'P101'
    // missing name, price, stock, dimensions => defaults kick in
};

const sampleUser = {
    username: 'devloper_maria',
    email: 'maria@example.com',
    age: 27,
    address: { city: 'Lisbon' }
};

const sampleUserNoCity = {
    username: 'nomad',
    email: 'travel@world.com'
    // no age, address missing
};

const blogMetadata = {
    metadata: { tags: ['destructuring', 'javascript', 'es6'] },
    content: { featured: true, score: 98 }
};

const emptyContent = {
    metadata: { tags: [] }
    // no content field
};

// Execute functions to demonstrate live output
const functionOutputDiv = document.getElementById('functionOutput');
functionOutputDiv.innerHTML = `
    <pre>⚡ <strong>Destructuring in Function Parameters</strong>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 <strong>1. displayProductDetails(product1):</strong>
   → ${displayProductDetails(product1)}

🎯 <strong>2. displayProductDetails(product2) with defaults:</strong>
   → ${displayProductDetails(product2)}

🎯 <strong>3. getFirstTwoItems(['apple', 'banana', 'cherry', 'date']):</strong>
   → ${JSON.stringify(getFirstTwoItems(['apple', 'banana', 'cherry', 'date']))}

🎯 <strong>4. formatUser(sampleUser):</strong>
   → ${formatUser(sampleUser)}

🎯 <strong>5. formatUser(sampleUserNoCity) → city default:</strong>
   → ${formatUser(sampleUserNoCity)}

🎯 <strong>6. extractHighlights(blogMetadata):</strong>
   → ${extractHighlights(blogMetadata)}

🎯 <strong>7. extractHighlights(emptyContent) → nested defaults:</strong>
   → ${extractHighlights(emptyContent)}

🎯 <strong>8. calculateDiscount({ price: 250, discountPercent: 20 }):</strong>
   → ${calculateDiscount({ price: 250, discountPercent: 20 })}

🎯 <strong>9. calculateDiscount() → all defaults:</strong>
   → ${calculateDiscount()}
    </pre>
`;

// Optional: extra console logs for developer verification (clean & neat)
console.log('====== DESTRUCTURING MASTERY ======');
console.log('Array: primaryColor =', primaryColor, '| secondaryColor =', secondaryColor);
console.log('Object: fullName =', fullName, '| role =', role);
console.log('Advanced: eventCity =', eventCity, '| streetAddress =', streetAddress);
console.log('Function demo: ', displayProductDetails(product1));
console.log('All destructuring exercises completed successfully ✅');