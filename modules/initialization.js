Hooks.on("renderCompendiumDirectory", async () => {
	if (game.folders.getName("The Enemy Within")) {	
		await game.folders.getName("The Enemy Within").update({"name":  "El enemigo interior"  })
		await game.folders.getName("Death on the Reik").update({"name":  "Muerte en el Reik"  })
	}
	
	if (game.folders.getName("Enemy In Shadows")) {
		await game.folders.getName("Enemy in Shadows").update({"name":  "Enemigo en las sombras"  })
		await game.folders.getName("Enemy in Shadows").update({"name":  "Enemigo en las sombras"  })
		await game.folders.getName("Enemy in Shadows").update({"name":  "Enemigo en las sombras"  })
		await game.folders.getName("Adventure").update({"name":  "Aventura"  })
		await game.folders.getName("Companion").update({"name":  "Compendio"  })
		await game.folders.getName("Beast Head").update({"name":  "Cabeza de bestia"  })
		await game.folders.getName("Daemonic Mien").update({"name":  "Aspectos demoníacos"  })
		await game.folders.getName("Encounters").update({"name":  "Encuentros"  })
		await game.folders.getName("Mental").update({"name":  "Mentales"  })
		await game.folders.getName("Mishaps").update({"name":  "Percances"  })
		await game.folders.getName("Physical").update({"name":  "Físicas"  })
		await game.folders.getName("Weather").update({"name":  "Tiempo"  })
	}
})