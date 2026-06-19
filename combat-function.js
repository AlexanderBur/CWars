// Create a combat function that takes the player's current health and the amount of damage received, ' +
// 'and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    const currentHealth = health - damage
    if (currentHealth < 0) {
        return 0
    }
    return currentHealth
}

function combatRe(health, damage) {
    return health < damage ? 0 : health - damage
}