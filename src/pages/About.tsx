
                {[
                  {
                    title: "Simplicity First",
                    description: "We believe complex cloud infrastructure shouldn't require complex tools. Everything we build aims to simplify the process."
                  },
                  {
                    title: "Best Practices by Default",
                    description: "Our AI is designed to incorporate security, reliability, and cost optimization best practices automatically."
                  },
                  {
                    title: "Continuous Learning",
                    description: "Our AI models improve with each architecture created, learning from the collective wisdom of our users."
                  },
                  {
                    title: "User-Centric Design",
                    description: "Every feature we build starts with understanding the real needs of cloud builders."
                  }
                ].map((value, index) => (
                  <Card 
                    key={index} 
                    className="group relative overflow-hidden bg-white dark:bg-card shadow-sm border border-border/40 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardContent className="p-6 relative">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/10">
                            <CheckCircle className="h-5 w-5 text-primary transform transition-all duration-300 group-hover:rotate-3" />
                          </div>
                        </div>
                        
                        <div className="transform transition-all duration-300 group-hover:translate-x-0.5">
                          <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
